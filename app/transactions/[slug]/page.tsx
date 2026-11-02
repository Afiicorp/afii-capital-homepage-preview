import { notFound } from "next/navigation";
import { transactions } from "@/data/transactions";
import TransactionDetail from "@/components/transaction-detail";
import "../transactions.css";
export function generateStaticParams(){return transactions.map(d=>({slug:d.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=transactions.find(x=>x.slug===slug);return {title:d?`${d.title} | AFII Transactions`:"Transaction | AFII"};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const deal=transactions.find(d=>d.slug===slug);if(!deal)notFound();return <TransactionDetail deal={deal!}/>;}
