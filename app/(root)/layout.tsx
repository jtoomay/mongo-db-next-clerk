import Header from "@/components/layout/Header"
import BottomNav from "@/components/layout/BottomNav"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="p-4">{children}</main>
      <BottomNav />
    </div>
  )
}
