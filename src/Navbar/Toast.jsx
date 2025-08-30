import { toast } from "react-toastify";

export const toastSuccess = (message)=>{
	return toast.success(message,{autoClose:1500});
}

export const toastError = (message)=>{
	return toast.error(message,{autoClose:1500});
}


