import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Shreepaada M C",
  description:
    "Entry-Level UX Designer specializing in user research, wireframing, prototyping, and usability testing. Google UX Design Certificate holder with experience designing mobile and web applications that solve real user problems.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
