

export const users = [
  { id: 1, name: 'Alice', posts: 15, followers: 320 },
  { id: 2, name: 'Bob', posts: 22, followers: 450 },
  { id: 3, name: 'Charlie', posts: 18, followers: 280 },
];

export const getAvgPosts = (u) => (u.reduce((s, { posts }) => s + posts, 0) / u.length).toFixed(1);
export const getTopUser = (u) => u.reduce((t, x) => x.followers > t.followers ? x : t);
export const getActive = (u) => u.filter(({ posts }) => posts > 15);
