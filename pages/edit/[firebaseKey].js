// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import ItemForm from '../../../components/ItemForm';
// import { getSingleItem } from '../../../api/itemData';

// export default function EditItem() {
//   const [editItem, setEditItem] = useState({});
//   const router = useRouter();
//   // TODO: grab the firebasekey
//   const { firebaseKey } = router.query;

//   // TODO: make a call to the API to get the book data
//   useEffect(() => {
//     getSingleItem(firebaseKey).then(setEditItem);
//   }, [firebaseKey]);

//   // TODO: pass object to form
//   return (<ItemForm obj={editItem} />);
// }

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getSingleItem } from '../../api/itemData';
// import ItemForm from '../../components/ItemForm';

// export default function EditItem() {
//   const [editobj, setEditobj] = useState({});
//   const router = useRouter();

//   const { id } = router.query;

//   useEffect(() => {
//     getSingleItem(id).then(setEditobj);
//   }, [id]);
//   return (<ItemForm obj={editobj} />);
// }
