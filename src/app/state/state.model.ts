interface Message {
  author: 'bot' | 'user',
  content: string
}

export interface StateModel {
  name: string;
  description: string,
  messages: Message[]
}