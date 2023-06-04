export interface Bot {
  status: string,
  name: string,
  description: string,
  avatar: string,
  messages: Message[]
}

export interface Message {
  author: string,
  content: string
}