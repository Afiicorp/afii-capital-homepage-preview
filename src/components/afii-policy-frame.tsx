"use client";
import {useState,type ReactNode} from "react";
import {Header,Footer,ContactModal} from "@/components/about-experience";
import "../../app/privacy-policy/policy.css";
export function PolicyFrame({title,subtitle,children}:{title:string;subtitle:string;children:ReactNode}){const [contact,setContact]=useState(false);return <><Header onContact={()=>setContact(true)}/><main className="af-policy"><section className="af-policy-hero"><div className="af-container"><nav className="af-breadcrumb"><a href="/">Home</a><span>/</span><span>{title}</span></nav><p className="af-policy-kicker">AFII · Website Information</p><h1>{title}</h1><p>{subtitle}</p></div></section><div className="af-container af-policy-content">{children}</div></main><Footer onContact={()=>setContact(true)}/><ContactModal open={contact} onClose={()=>setContact(false)}/></>}
