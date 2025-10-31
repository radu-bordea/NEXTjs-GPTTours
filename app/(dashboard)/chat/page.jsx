// app/(dashboard)/chat/page.jsx

import Chat from "../../../components/Chat";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient, // ✅ import only once
} from "@tanstack/react-query";

// This page is a Server Component by default (Next.js App Router).
// We create a QueryClient instance on the server to (optionally) prefetch data
// and then pass its dehydrated state to the client via HydrationBoundary.
const ChatPage = () => {
  // ✅ Use a DIFFERENT variable name than the class to avoid shadowing
  const queryClient = new QueryClient();

  // (Optional) If you want to prefetch, you'd do it here on the server:
  // await queryClient.prefetchQuery({
  //   queryKey: ["messages", { threadId }],
  //   queryFn: () => fetchMessages(threadId),
  // });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <Chat /> should be a Client Component that uses React Query hooks */}
      <Chat />
    </HydrationBoundary>
  );
};

export default ChatPage;
