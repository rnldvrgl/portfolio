interface SectionLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLayout({
  children,
  className,
  ...props
}: SectionLayoutProps) {
  return (
    <section
      className={className}
      {...props}
    >
      <div className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] pb-12">
        {children}
      </div>
    </section>
  )
}
