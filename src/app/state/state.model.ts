interface Message {
  author: 'bot' | 'user',
  content: string
}

export interface StateModel {
  img?: string,
  name: string;
  description: string,
  messages: Message[]
}