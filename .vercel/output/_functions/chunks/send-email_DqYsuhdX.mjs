import { r as __exportAll } from "./rolldown-runtime_DWOOXAbm.mjs";
import "resend";
//#region src/lib/contact.ts
var NAME_MAX_LENGTH = 100;
var EMAIL_MAX_LENGTH = 254;
var MESSAGE_MAX_LENGTH = 2e3;
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var isRecord = (value) => {
	return typeof value === "object" && value !== null && !Array.isArray(value);
};
var isPresentString = (value, maxLength) => {
	return typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;
};
function parseContactMessage(body) {
	if (!isRecord(body)) return {
		data: null,
		error: "Request body must be a JSON object"
	};
	const { name, email, message } = body;
	if (!isPresentString(name, NAME_MAX_LENGTH)) return {
		data: null,
		error: `"name" is required and must be at most ${NAME_MAX_LENGTH} characters`
	};
	if (!isPresentString(email, EMAIL_MAX_LENGTH) || !EMAIL_REGEX.test(email)) return {
		data: null,
		error: "\"email\" must be a valid email address"
	};
	if (!isPresentString(message, MESSAGE_MAX_LENGTH)) return {
		data: null,
		error: `"message" is required and must be at most ${MESSAGE_MAX_LENGTH} characters`
	};
	return {
		data: {
			name: name.trim(),
			email: email.trim(),
			message: message.trim()
		},
		error: null
	};
}
//#endregion
//#region src/lib/email.ts
var EmailServiceError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "EmailServiceError";
	}
};
async function sendContactEmail(message) {
	throw new EmailServiceError("Email service is not configured");
}
//#endregion
//#region src/pages/api/send-email.ts
var send_email_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var JSON_HEADERS = { "Content-Type": "application/json" };
var jsonResponse = (payload, status) => {
	return new Response(JSON.stringify(payload), {
		status,
		headers: JSON_HEADERS
	});
};
var POST = async ({ request }) => {
	let body;
	try {
		body = await request.json();
	} catch {
		return jsonResponse({ error: "Invalid JSON body" }, 400);
	}
	const parsed = parseContactMessage(body);
	if (parsed.error !== null) return jsonResponse({ error: parsed.error }, 400);
	try {
		await sendContactEmail(parsed.data);
		return jsonResponse({ success: true }, 200);
	} catch (error) {
		console.error("Failed to send contact email:", error);
		return jsonResponse({ error: "Failed to send email" }, 500);
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/send-email@_@ts
var page = () => send_email_exports;
//#endregion
export { page };
