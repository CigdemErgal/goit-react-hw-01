import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
//arkadaş listesi componentini oluşturuyoruz.içine arkadaş listesi item componentini ekliyoruz ve gerekli verileri props olarak gönderiyoruz
export default function FriendList({ friends }) {    
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
//prop lar süslü parantez içinde oluşturulur ve arkadaş listesi item componentine gönderilir. 
// friends.map() fonksiyonu ile her bir arkadaş için bir FriendListItem componenti oluşturulur 
// ve gerekli veriler props olarak gönderilir. 
// key prop'u her bir item için benzersiz bir id sağlar.