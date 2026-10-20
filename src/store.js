import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialStudents = [
 {id:1,name:'Ava Thompson',email:'ava.t@classroom.edu',className:'Algebra II',grade:94,missing:0,status:'On track'},
 {id:2,name:'Noah Williams',email:'noah.w@classroom.edu',className:'Algebra II',grade:82,missing:2,status:'Needs review'},
 {id:3,name:'Mia Patel',email:'mia.p@classroom.edu',className:'Biology',grade:97,missing:0,status:'On track'},
 {id:4,name:'Liam Johnson',email:'liam.j@classroom.edu',className:'Biology',grade:76,missing:3,status:'Needs review'},
 {id:5,name:'Sophia Garcia',email:'sophia.g@classroom.edu',className:'World History',grade:89,missing:1,status:'On track'},
 {id:6,name:'Ethan Chen',email:'ethan.c@classroom.edu',className:'Algebra II',grade:68,missing:4,status:'At risk'},
 {id:7,name:'Isabella Brown',email:'isabella.b@classroom.edu',className:'World History',grade:92,missing:0,status:'On track'}
];
const slice = createSlice({name:'gradebook',initialState:{students:initialStudents,query:'',classFilter:'All classes',selectedIds:[],notice:''},reducers:{
 setQuery:(s,a)=>{s.query=a.payload}, setClassFilter:(s,a)=>{s.classFilter=a.payload},
 toggleStudent:(s,a)=>{s.selectedIds=s.selectedIds.includes(a.payload)?s.selectedIds.filter(id=>id!==a.payload):[...s.selectedIds,a.payload]},
 updateGrade:(s,a)=>{const st=s.students.find(x=>x.id===a.payload.id);if(st){st.grade=Math.max(0,Math.min(100,Number(a.payload.grade)||0));st.status=st.grade<70?'At risk':st.grade<85?'Needs review':'On track';s.notice=`Updated ${st.name}'s grade`}},
 clearNotice:(s)=>{s.notice=''}
}});
export const {setQuery,setClassFilter,toggleStudent,updateGrade,clearNotice}=slice.actions;
export const store=configureStore({reducer:{gradebook:slice.reducer}});
