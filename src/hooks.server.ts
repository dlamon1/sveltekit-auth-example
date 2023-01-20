import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
})

// Pretty funny that you're taking the entire hook function for yourself. Like the amount of people that will not be utilizing the handle function in hooks.server.ts will be close to 0.
