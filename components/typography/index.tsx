import { ReactNode } from "react";

// ==================================================
// HEADINGS =========================================
// ==================================================
export const H1 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h1 className={`text-2xl md:text-5xl font-bold  ${className}`}>{children}</h1>;

export const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h1 className={`text-2xl font-bold  ${className}`}>{children}</h1>;

export const H3 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h1 className={`text-lg font-semibold  ${className}`}>{children}</h1>;

export const H4 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h1 className={`text-base font-bold  ${className}`}>{children}</h1>;

// ==================================================
// SUB HEADINGS =====================================
// ==================================================
export const SubH1 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <h1 className={`text-sm text- ${className}`}>{children}</h1>
);

export const SubH2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <h1 className={`text-sm font-semibold text-[#2E6D64] ${className}`}>
    {children}
  </h1>
);

// ====================================================
// PARAGRAPHS =========================================
// ====================================================

export const P1 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <p className={`text-xl ${className}`}>{children}</p>;

export const P2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <p className={`text-lg ${className}`}>{children}</p>;
