export interface Book {
    id: number 
    title: string
    publishingDate: Date
    categori: number
    publisherName: string
    authorNames: string
    authors: Author[]
    authorIds: []
  }
  
  export interface Author {
    id: number
    firstName: string
    lastName: string
  }
  