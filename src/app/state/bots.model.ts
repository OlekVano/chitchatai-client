export interface Bot {
  summary: string,
  name: string,
  description: string,
  avatar: string,
  messages: Message[]
}

export interface Message {
  bot: boolean,
  content: string
}