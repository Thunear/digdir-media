"use client";

import classes from "./page.module.css";
import { Container } from "react-bootstrap";
import { Header } from "@/components/Header/Header";
import { Card } from "@/components/Card/Card";
import { Modal, Button } from "@digdir/designsystemet-react";
import {
  MagnifyingGlassIcon,
  MenuGridIcon,
  BulletListIcon,
} from "@navikt/aksel-icons";
import { useRef, useState } from "react";

const cards = [
  {
    title: "Personer som holder klosser",
    type: "illustration",
    img: "img/image1.png",
  },
  {
    title: "Person som sitter med en bok og leser",
    type: "illustration",
    img: "img/image2.png",
  },
  {
    title: "Person som springer til høgre med bokser bak seg",
    type: "illustration",
    img: "img/image3.png",
  },
  {
    title: "Digdir logo",
    type: "logo",
    img: "img/logo1.svg",
  },
  {
    title: "Telefon",
    type: "icon",
    img: "img/phone.svg",
  },
  {
    title: "ID-porten logo",
    type: "logo",
    img: "img/logo2.svg",
  },
  {
    title: "Bruker",
    type: "icon",
    img: "img/user.svg",
  },
  {
    title: "Monitor",
    type: "icon",
    img: "img/monitor.svg",
  },
];

export default function Home() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalImg, setModalImg] = useState<string>("");

  const showModal = (title: string, img: string) => {
    setModalTitle(title);
    setModalImg(img);
    modalRef.current?.showModal();
  };

  return (
    <main className={classes.main}>
      <Header />
      <Modal.Root>
        <Modal.Dialog
          ref={modalRef}
          onInteractOutside={() => modalRef.current?.close()}
          style={{
            maxWidth: "1300px",
          }}
        >
          <Modal.Header>{modalTitle}</Modal.Header>
          <Modal.Content className={classes.modalContent}>
            <div className={classes.modalLeft}>
              <img src={modalImg} alt="" />
            </div>
            <div className={classes.modalRight}>
              <Button>Last ned SVG</Button>
              <Button>Last ned PNG</Button>
            </div>
          </Modal.Content>
        </Modal.Dialog>
      </Modal.Root>
      <Container>
        <div className={classes.toolbar}>
          <div className={classes.searchContainer}>
            <MagnifyingGlassIcon title="a11y-title" fontSize="1.5rem" />
            <input type="text" placeholder="Søk her..." />
          </div>
          <div>
            <MenuGridIcon title="a11y-title" fontSize="1.5rem" />
            <BulletListIcon title="a11y-title" fontSize="1.5rem" />
          </div>
        </div>
        <div className={classes.cards}>
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              type={card.type}
              img={card.img}
              onClick={() => showModal(card.title, card.img)}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
