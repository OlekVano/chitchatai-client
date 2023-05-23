export interface Bot {
  name: string,
  description: string,
  avatar: string,
  messages: Message[]
}

interface Message {
  author: string,
  content: string
}