"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";

const Search = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('query') || ""
  const [results, setResults] = useState<Models.Document[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchFiles = async () => {
      const files = await getFiles({ types, searchText: query, sort, limit })
      setResults(files.documents)
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if(!searchQuery){
      setQuery('')
    }

  }, [searchQuery])

  return (
    <div className="search">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input
          value={query}
          placeholder="Search..."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
