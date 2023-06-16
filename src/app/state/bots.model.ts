export interface Bot {
  id: string,
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