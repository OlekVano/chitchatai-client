export interface Bot {
  status: string,
  name: string,
  description: string,
  avatar: string,
  messages: Message[]
}

export interface Message {
  bot: boolean,
  content: string
}