// Sample book data for the bookstore
export const booksData = [
  {
    id: 1,
    title: 'การตรวจเช็ค Order ลูกค้า',
    author: 'นายบอส',
    category: 'waiter',
    coverImage: 'https://img.freepik.com/free-photo/we-serve-best-cakes_637285-7884.jpg?semt=ais_hybrid&w=740&q=80',
    isbn: '978-0-7432-7356-5',
    description: 'นวนิยายคลาสสิกของอเมริกาที่เล่าเรื่องราวของเจย์ แกตส์บี้ และความฝันอเมริกันในยุค 1920s'
  },
  {
    id: 2,
    title: 'ทักษะการพูดคุย สำหรับพนักงาน',
    author: 'นายอาร์ม',
    category: 'waiter',
    coverImage: 'https://cdn.prod.website-files.com/6038a1daeabe37419e706031/64240a49a8b5e969d068d915_skqWMkzQDN44VAWHoKgs8-gmAlcuI9J5xCNvdw0D6adRCzsISL9rCCGge5DnStE30bMq_9j2W_qDWPaxGabSufwLOiV_tGXZAtJQadA1LkMLMtQPdnMfYI79-gmLqL94ZpA0QNCOsI5QtFyHKvXlCmI.jpeg',
    description: 'นวนิยายดิสโทเปียที่พรรณนาถึงสังคมเผด็จการในอนาคต'
  },
  {
    id: 3,
    title: 'กฏของพนักงาน',
    author: 'นายบอส',
    category: 'waiter',
    coverImage: 'https://staffmatch.com/static/bccfb659c907ef6fa51410f52e73d8d0/d8f37/ccb3f3fe9f540b7c701e206b.jpg',
    description: 'เรื่องราวการเติบโตและความอยุติธรรมทางเชื้อชาติในอเมริกาใต้'
  },
  {
    id: 4,
    title: 'ทักษะที่ควรมี',
    author: 'นายบัง',
    category: 'waiter',
    coverImage: 'https://www.ice.edu/sites/default/files/styles/width_1000/public/content/blog-article/header-image/waitress_pamela%20vachon_header_FOH%20roles.jpg.webp?itok=C9zjj5Bx',
    description: 'ประวัติศาสตร์ของมนุษยชาติตั้งแต่ยุคหินจนถึงปัจจุบัน'
  }
];

// Function to get all books
export const getAllBooks = () => {
  return booksData;
};

// Function to get a single book by ID
export const getBookById = (id) => {
  return booksData.find(book => book.id === parseInt(id));
};

// Function to get books by category
export const getBooksByCategory = (category) => {
  if (!category || category === 'all') return booksData;
  return booksData.filter(book => book.category === category);
};

// Function to search books
export const searchBooks = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return booksData.filter(book => 
    book.title.toLowerCase().includes(lowercaseQuery) ||
    book.author.toLowerCase().includes(lowercaseQuery) ||
    book.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to get featured books
export const getFeaturedBooks = (limit = 3) => {
  return booksData
    .filter(book => book.rating >= 4.5)
    .slice(0, limit);
};

// Function to get new books
export const getNewBooks = (limit = 4) => {
  return booksData
    .filter(book => book.isNew)
    .slice(0, limit);
};

// Function to get discounted books
export const getDiscountedBooks = (limit = 4) => {
  return booksData
    .filter(book => book.discount)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(0, limit);
};

export default booksData;