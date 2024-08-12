This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Zustand là một thư viện quản lý trạng thái (state management) cho các ứng dụng React, được thiết kế để đơn giản và nhẹ nhàng hơn so với các thư viện quản lý trạng thái khác như Redux hay MobX.

## Các Đặc Điểm Chính Của Zustand

1. Đơn Giản và Nhẹ Nhàng:
- Zustand có API đơn giản và dễ sử dụng, giúp bạn quản lý trạng thái trong ứng dụng React một cách dễ dàng mà không cần cấu hình phức tạp.

2. Khả Năng Tái Sử Dụng và Tách Biệt:
- Zustand cho phép bạn chia nhỏ trạng thái và hành động thành các "store" độc lập, giúp mã nguồn của bạn trở nên rõ ràng và dễ bảo trì.

3. Không Cần Provider:
- Không giống như Context API trong React, Zustand không yêu cầu bạn phải bọc ứng dụng của bạn với một Provider, giúp việc tích hợp dễ dàng hơn.

4. Dễ Dàng Kết Hợp Với React:
- Zustand tích hợp tốt với React, và bạn có thể sử dụng hooks để truy cập và quản lý trạng thái.

5. Khả Năng Theo Dõi Thay Đổi:
- Zustand cung cấp tính năng theo dõi và tự động cập nhật các phần tử React khi trạng thái thay đổi.

## Cài Đặt và Sử Dụng
- Để sử dụng Zustand, bạn cần cài đặt nó qua npm hoặc yarn:

- npm install zustand

- Sau đó, bạn có thể tạo một store và sử dụng nó trong ứng dụng của bạn như sau:

```jsx
import create from 'zustand';

// Tạo store với Zustand
const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  removeCount: () => set({ count: 0 })
}));

// Sử dụng store trong một component
function Counter() {
  const { count, increase, decrease } = useStore();
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
```

- Ví Dụ Về State Management
- Dưới đây là một ví dụ về việc tạo và sử dụng một store để quản lý trạng thái trong ứng dụng React:

```jsx
import create from 'zustand';

// Tạo store
const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// Component sử dụng store
function UserProfile() {
  const { user, setUser } = useStore();

  const handleLogin = () => {
    // Giả sử bạn có một hàm để lấy thông tin người dùng
    const user = { name: 'John Doe' };
    setUser(user);
  };

  return (
    <div>
      <h1>{user ? `Hello, ${user.name}` : 'Please log in'}</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default UserProfile;

```

## Khi Nào Nên Sử Dụng Zustand

- Khi Bạn Cần Một Giải Pháp Quản Lý Trạng Thái Đơn Giản: Nếu ứng dụng của bạn không yêu cầu các tính năng phức tạp của Redux hoặc MobX, Zustand có thể là một lựa chọn tốt.
- Khi Bạn Muốn Tránh Cấu Hình Phức Tạp: Zustand giúp giảm thiểu cấu hình và boilerplate code.

## Zustand là một công cụ mạnh mẽ cho việc quản lý trạng thái trong ứng dụng React, đặc biệt là khi bạn tìm kiếm sự đơn giản và hiệu suất.