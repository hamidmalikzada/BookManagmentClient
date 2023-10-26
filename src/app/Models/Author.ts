export interface Author {
    id: number
    firstName: string
    lastName: string
    authoredBooks: AuthoredBook[]
  }
  
  export interface AuthoredBook {
    id: number
    title: string
    publishingDate: string
    categori: number
    publisherName: string
  }