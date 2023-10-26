export interface Book {
    id: number
    title: string
    publishingDate: string
    categori: number
    publisherName: string
    authorNames: string
    authors: Author[]
  }
  
  export interface Author {
    id: number
    firstName: string
    lastName: string
  }
  