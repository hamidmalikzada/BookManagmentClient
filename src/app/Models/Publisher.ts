export interface Publisher {
    id: number
    publisherName: string
    publishedBooks: PublishedBook[]
  }
  
  export interface PublishedBook {
    id: number
    title: string
    publishingDate: string
    categori: number
  }