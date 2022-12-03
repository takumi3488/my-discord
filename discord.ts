import discord from "https://raw.githubusercontent.com/takumi3488/deno-simple-bot/main/discord.ts";

const publicUrl = Deno.env.get("DISCORD_PUBLIC_WEBHOOK") as string;
const privateUrl = Deno.env.get("DISCORD_PRIVATE_WEBHOOK") as string;

export default {
  public: async (text: string) => await discord(publicUrl, text),
  private: async (text: string) => await discord(privateUrl, text)
};
