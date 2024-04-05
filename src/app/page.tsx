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
  DownloadIcon,
} from "@navikt/aksel-icons";
import { useRef, useState } from "react";

const cards = [
  {
    title: "Personer som holder klosser og går til venstre",
    type: "illustration",
    img: "img/image1.svg",
    variants: ["img/image1-1.svg", "img/image1-2.svg"],
  },
  {
    title: "Person som sitter med en bok og leser på en sakkosekk",
    type: "illustration",
    img: "img/image2.svg",
  },
  {
    title: "Person som løper til høyre med bokser bak seg",
    type: "illustration",
    img: "img/image3.svg",
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
  const [variants, setVariants] = useState<string[]>([]);

  const showModal = (title: string, img: string, variants: string[]) => {
    setModalTitle(title);
    setModalImg(img);
    setVariants(variants);
    modalRef.current?.showModal();
  };

  const test = (img: string) => {
    setModalImg(img);
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
              {variants.length > 0 && (
                <div>
                  <h3 className={classes.modalTitle}>Varianter</h3>
                  <div className={classes.variants}>
                    {variants.map((variant, index) => (
                      <img
                        key={index}
                        src={variant}
                        alt=""
                        onClick={() => test(variant)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className={classes.tomato}>
                <h3 className={classes.modalTitle}>Alternativ tekst</h3>
                <div>
                  Been an in any five in felt self-interest, is let of it boss
                  nature, every we way. Never it that a farther handpainted.
                </div>
              </div>

              <div className={classes.tagsContainer}>
                <h3 className={classes.modalTitle}>Tagger</h3>
                <div className={classes.tags}>
                  <div className={classes.tag}>Personer</div>
                  <div className={classes.tag}>Blå</div>
                  <div className={classes.tag}>Mat</div>
                </div>
              </div>

              <div className={classes.buttons}>
                <Button
                  className={classes.btn}
                  variant="tertiary"
                  color="second"
                  size="small"
                >
                  <DownloadIcon title="a11y-title" fontSize="1.5rem" />
                  SVG
                </Button>
                <Button
                  className={classes.btn}
                  variant="tertiary"
                  color="second"
                  size="small"
                >
                  <DownloadIcon title="a11y-title" fontSize="1.5rem" />
                  PNG
                </Button>
              </div>
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
              onClick={() =>
                showModal(card.title, card.img, card.variants || [])
              }
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
