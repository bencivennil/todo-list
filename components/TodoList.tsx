"use client";

import React from "react";

export default function TodoList() {
  return (
    <section>
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => {
            alert("Implementa in questo componente il caricamento della lista");
          }}
        >
          Carica lista
        </button>
      </div>
    </section>
  );
}
