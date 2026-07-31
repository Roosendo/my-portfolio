/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY?: string
  readonly RESEND_FROM_EMAIL?: string
  readonly CONTACT_EMAIL?: string
}
