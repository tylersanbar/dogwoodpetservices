"use server";

import { redirect } from "next/navigation";

const contactEmail = "contact@dogwoodpet.services";
const allowedServices = new Set([
  "Dog Boarding",
  "In-Home Care",
  "Overnight Care",
  "Enrichment Visits",
]);

function fieldValue(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactRequest(formData: FormData) {
  const website = fieldValue(formData, "website");

  if (website) {
    redirect("/contact-sent");
  }

  const name = fieldValue(formData, "name");
  const email = fieldValue(formData, "email");
  const phone = fieldValue(formData, "phone");
  const service = fieldValue(formData, "service");
  const message = fieldValue(formData, "message");

  if (!name || !email || !message || !allowedServices.has(service)) {
    redirect("/contact-error");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const emailDomain = process.env.RESEND_EMAIL_DOMAIN ?? "dogwoodpet.services";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? `Dogwood Pet Services <website@${emailDomain}>`;

  if (!apiKey) {
    redirect("/contact-error");
  }

  const subject = `New ${service} request from ${name}`;
  const text = [
    "New Dogwood Pet Services contact request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [contactEmail],
      reply_to: email,
      subject,
      text,
      html: `
        <h1>New Dogwood Pet Services contact request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    redirect("/contact-error");
  }

  redirect("/contact-sent");
}
