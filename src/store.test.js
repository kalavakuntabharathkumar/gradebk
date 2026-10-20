import reducer, { setQuery, setClassFilter, toggleStudent, updateGrade, clearNotice } from './store';
const initial = {students:[{id:1,name:'Ava',grade:80,status:'Needs review'}],query:'',classFilter:'All classes',selectedIds:[],notice:''};
test('stores the search query',()=>{expect(reducer(initial,setQuery('Ava')).query).toBe('Ava')});
test('toggles selected students',()=>{expect(reducer(initial,toggleStudent(1)).selectedIds).toEqual([1])});
test('updates grade and recalculates status',()=>{const next=reducer(initial,updateGrade({id:1,grade:65}));expect(next.students[0].grade).toBe(65);expect(next.students[0].status).toBe('At risk')});
test('clears the notification',()=>{expect(reducer({...initial,notice:'saved'},clearNotice()).notice).toBe('')});
