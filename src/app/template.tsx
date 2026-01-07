'use client';

import { BrandLoader } from "@/components/BrandLoader/BrandLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = 'wcs_brand_loader_seen';
export default function Template({ children }:{ children: React.ReactNode }) {
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		const alreadySeen = sessionStorage.getItem(SESSION_KEY) === '1';
		if(alreadySeen) return;

		setShowLoader(true);
		sessionStorage.setItem(SESSION_KEY, '1')

		const timeout = setTimeout(()=>{
			setShowLoader(false);
		}, 1700);

		return () => clearTimeout(timeout);
	},[]);

	return (
		<>
			<AnimatePresence mode="wait">
				{showLoader && <BrandLoader key='brand-loader'/>}
			</AnimatePresence>
			{children}
		</>
	)
};

//FIXME: miganie strony przed brandloaderem podczas pierwszego załadowania. 

//IMPROVE: łagodne wyjście brandloader a nie nagłe znikanie.