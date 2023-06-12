import {getImages} from "./api/api";

const form = document.querySelector('.search-form')!;

form.addEventListener('submit', onSubmit);

function onSubmit(e: any) {
    e.preventDefault();
    const form = e.currentTarget;
    let query: string;
    query = form.elements.searchQuery.value.trim();

    getImages(query).then(items=>{
      console.log(items)
    })
  };