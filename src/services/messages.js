import supabase from "./supabase";

export const sendMessage = (message) => {
  supabase.from("messages").insert([message]);
};

export const fetchMessages = async (setMessages) => {
  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .order("inserted_at", { ascending: true });
  if (error) console.error("error fetching messages:", error.message);
  setMessages(messages);
};