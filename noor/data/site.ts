const u=(id:string,w=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
// Image IDs are unverified: open each URL and swap any that fail or do not look Indian/editorial enough.
export const IMG={hero:u('photo-1583939003579-730e3918a45a',2000),archive:u('photo-1609151354449-2b7d2b4ab6e3',900),bridal:u('photo-1610189844848-7e3f2b0d6e0d',2000),
 showroom:u('photo-1573408301185-9146fe634ad0',1600),founder:u('photo-1590650153855-d9e808231d41',900),
 cats:['photo-1583939003579-730e3918a45a','photo-1610694955371-d4a3e0ce4b52','photo-1605100804763-247f67b3557e','photo-1599643477877-530eb83abc8e','photo-1611652022419-a9419f74343d','photo-1535632066927-ab7c9ab60908'].map(i=>u(i,900)),
 craft:['photo-1617038220319-276d3cfab638','photo-1573408301185-9146fe634ad0','photo-1602173574767-37ac01994b2a','photo-1515562141207-7a88fb7ce338','photo-1599643478518-a784e5dc4c8f'].map(i=>u(i,900)),
 journal:['photo-1583939003579-730e3918a45a','photo-1610694955371-d4a3e0ce4b52','photo-1601121141461-9d6647bca1ed','photo-1543294001-f7cd5d7fb516'].map(i=>u(i,900))};
// Replace before delivery to a client
export const CONTACT={whatsapp:'910000000000',phone:'+91 00000 00000',email:'hello@noorandco.example',map:'https://maps.google.com/?q=C.G.+Road+Ahmedabad'};
export const wa=(m:string)=>`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(m)}`;
export const nav=['Collections','Bridal','Our Story','Craftsmanship','Journal'];
export const cats=['Bridal','Gold','Diamonds','Necklaces','Bangles','Earrings'];
export type Product={slug:string;name:string;price:string;material:string[];desc:string;img:string;gallery:string[]};
const p=(slug:string,name:string,price:string,material:string[],desc:string,ids:string[]):Product=>({slug,name,price,material,desc,img:u(ids[0],1200),gallery:ids.map(i=>u(i,1400))});
export const products:Product[]=[
p('zara-diamond-necklace','Zara Diamond Necklace','₹3,25,000',['18K Gold','Natural Diamonds'],'A cascade of brilliant diamonds set for the neckline of an Indian bride or a modern evening.',['photo-1599643477877-530eb83abc8e','photo-1515562141207-7a88fb7ce338']),
p('meher-polki-set','Meher Polki Set','₹2,85,000',['Polki Diamonds','22K Gold','Handcrafted'],'A traditional Polki composition reinterpreted with delicate proportions and intricate gold detailing.',['photo-1583939003579-730e3918a45a','photo-1610694955371-d4a3e0ce4b52']),
p('aarvi-gold-bangles','Aarvi Gold Bangles','₹1,18,000',['22K Gold','Hallmarked'],'A pair of hand-engraved bangles, weighty and warm, made to be stacked or worn alone.',['photo-1611652022419-a9419f74343d','photo-1601121141461-9d6647bca1ed']),
p('noor-diamond-earrings','Noor Diamond Earrings','₹92,000',['18K Gold','Diamonds'],'Our house signature: a quiet drop of light that works from morning pooja to evening reception.',['photo-1535632066927-ab7c9ab60908','photo-1617038220319-276d3cfab638']),
p('ira-emerald-ring','Ira Emerald Ring','₹1,45,000',['18K Gold','Natural Emerald'],'A deep green emerald in an heirloom-style setting with hand-finished gold shoulders.',['photo-1605100804763-247f67b3557e','photo-1603561591411-07134e71a2a9']),
p('saira-gold-necklace','Saira Gold Necklace','₹1,76,000',['22K Gold','Hallmarked'],'A temple-inspired gold necklace in a modern, lighter weight for everyday celebrations.',['photo-1599643478518-a784e5dc4c8f','photo-1543294001-f7cd5d7fb516'])];
export const stories=[['My mother bought her wedding necklace here. Twenty-eight years later, I came back for mine.','Ananya Shah'],['The experience felt personal from the moment we walked in.','Rohan & Meera'],['It wasn\'t just choosing jewellery. It became part of our family\'s story.','Priya Mehta']];
export const journal=[['How to choose your wedding necklace','Bridal'],['Gold: understanding purity & hallmarking','Guide'],['Polki, Kundan & diamonds: what\'s the difference?','Education'],['How to care for your gold jewellery','Care']];
export const locations=[['Ahmedabad','C.G. Road','Flagship'],['Surat','Ring Road',''],['Vadodara','Alkapuri','']];
export const timeline=[['1986','The Beginning','One small showroom and a promise: jewellery should be trusted.'],['2001','The Second Generation','A new generation brings bridal design and diamonds into the house.'],['2015','A New Chapter','The showroom is reimagined and two more cities open their doors.'],['2026','The Legacy Continues','Three generations, one standard of craft.']];
