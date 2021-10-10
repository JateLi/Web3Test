import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { useSelector, shallowEqual } from "react-redux";
import { ethers } from "ethers";
import { addContact, removeContact } from "../../store/actionCreator";

// TODO need to test with testNet and mock ETH.
export const startPayment = async ({ ether, addr }: any) => {
  const { ethereum } = window as any;
  try {
    if (!ethereum) {
      console.log(ethereum);
      return;
    }
    await ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
  } catch (err) {
    console.log(err);
  }
};

export const Send: React.FC<any> = ({ match }) => {
  const history = useHistory();
  const contactId = match.params.id;

  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  const selectedItem = contacts.find(({ id }) => id === Number(contactId));

  const [contact, setContact] = useState<any>({
    id: -1,
    title: "",
    body: "",
    ETH: 0,
  });
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleContactData = (e: React.FormEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const dispatch: Dispatch<any> = useDispatch();

  const addingContact = React.useCallback(
    (contact: Contact) => dispatch(addContact(contact)),
    [dispatch]
  );

  const removingContact = React.useCallback(
    (contact: Contact) => dispatch(removeContact(contact)),
    [dispatch]
  );

  const onEditContact = (id: number) => {
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    // Overwrite to textInput field.
    if (!selectedItem) return;
    setContact(selectedItem);
  }, [selectedItem]);

  const handleSubmit = async () => {
    await startPayment({
      setError,
      setTxs,
      ether: "5",
      addr: "0x17ee3EE41442d29998663F9E549F045B07753844",
    });
  };

  return (
    <>
      <form className={"EditContact center login"}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleContactData}
          value={contact.title}
          disabled={true}
        />
        <input
          type="text"
          id="body"
          placeholder="Description"
          onChange={handleContactData}
          value={contact.body}
          disabled={true}
        />

        <input
          type="text"
          id="ETH"
          placeholder="ETH"
          onChange={handleContactData}
          value={contact.ETH}
        />
        <button
          disabled={contact === undefined ? true : false}
          onClick={() => handleSubmit()}
        >
          Send
        </button>
      </form>
    </>
  );
};
