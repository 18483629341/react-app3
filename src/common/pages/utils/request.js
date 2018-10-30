import $ from 'jquery';
//export const ajax=(url,type,data)=>{
//  return $.ajax;
//}
const baseUrl="http://localhost:3000"
export const get=(url,data)=>{
	return $.get(baseUrl+url,data);
}
export const post=(url,data)=>{
  return $.post(baseUrl+url,data);
}