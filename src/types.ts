export interface Bot {
  name: string,
  status: string,
  description: string,
  avatar: string,
  messages: Message[]
}

export interface Message {
  author: string,
  content: string
}