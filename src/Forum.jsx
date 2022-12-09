function Forum() {
  return (
    <div className=" bg-primary w-screen">
      <div className="max-w-7xl mx-auto py-4 ">
        {/* section pembuka */}
        <section className="flex w-full items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-32 stroke-slate-50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          <p className="my-auto text-slate-50">
            Selamat Datang di Forum Diskusi Kelas
            <span className="font-bold text-accent block">
              Nama kelas disini
            </span>
            Konsultasi dengan guru dan teman kelasmu disini
          </p>
        </section>

        {/* seection inti */}
        <section className="mx-auto">
          {/* pencarian */}
          <div className="flex justify-between ">
            <div className="">
              <button className="px-2 py-3 rounded bg-accent">
                Buat diskusi baru
              </button>
            </div>
            <div className="m-2">
              <form action="" method="post" className="flex">
                {/* create input type text with search icons color accent */}
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Cari diskusi"
                  className="px-2 py-3 w-96 rounded bg-secondary"
                />
                <button type="submit" className="px-2 my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-center stroke-accent"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* card  */}

          <div className="flex flex-col">
            {/* card item */}
            <div className="flex justify-between border-b-2 border-accent mt-2 text-slate-50">
              <div className="flex w-full">
                <div className="overflow-hidden">
                  <h3 className="font-bold">Tombol tidak berjalan?</h3>
                  <p className="font-semibold">Nama user</p>
                  <p className="text-sm">10 Desember 2022</p>
                  <p className="truncate ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis beatae tempore odit ipsa quos nulla rem eos,
                    eveniet aspernatur magnam esse. Non, provident! Voluptate
                    molestias quas reprehenderit itaque? Tenetur sit voluptates
                    debitis, atque mollitia alias qui excepturi molestiae. Et,
                    molestias ducimus fugiat nulla assumenda molestiae neque
                    velit id iusto, consequuntur dolor, illo laboriosam placeat!
                    Voluptatum beatae suscipit repudiandae libero inventore odit
                    ducimus, commodi perspiciatis accusamus, recusandae a
                    voluptate provident corrupti error voluptates, reiciendis
                    assumenda neque atque. Doloremque officiis repellendus,
                    totam impedit nisi aliquam ut amet debitis id esse maxime
                    recusandae aliquid veniam libero maiores quo fuga eos illo
                    laborum! Nulla?
                  </p>
                  <div className="my-2">
                    <a href="" className="rounded bg-secondary py-3 px-4">
                      Lihat Diskusi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card item */}
            <div className="flex justify-between border-b-2 border-accent mt-2 text-slate-50">
              <div className="flex w-full">
                <div className="overflow-hidden">
                  <h3 className="font-bold">Tombol tidak berjalan?</h3>
                  <p className="font-semibold">Nama user</p>
                  <p className="text-sm">10 Desember 2022</p>
                  <p className="truncate ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis beatae tempore odit ipsa quos nulla rem eos,
                    eveniet aspernatur magnam esse. Non, provident! Voluptate
                    molestias quas reprehenderit itaque? Tenetur sit voluptates
                    debitis, atque mollitia alias qui excepturi molestiae. Et,
                    molestias ducimus fugiat nulla assumenda molestiae neque
                    velit id iusto, consequuntur dolor, illo laboriosam placeat!
                    Voluptatum beatae suscipit repudiandae libero inventore odit
                    ducimus, commodi perspiciatis accusamus, recusandae a
                    voluptate provident corrupti error voluptates, reiciendis
                    assumenda neque atque. Doloremque officiis repellendus,
                    totam impedit nisi aliquam ut amet debitis id esse maxime
                    recusandae aliquid veniam libero maiores quo fuga eos illo
                    laborum! Nulla?
                  </p>
                  <div className="my-2">
                    <a href="" className="rounded bg-secondary py-3 px-4">
                      Lihat Diskusi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card item */}
            <div className="flex justify-between border-b-2 border-accent mt-2 text-slate-50">
              <div className="flex w-full">
                <div className="overflow-hidden">
                  <h3 className="font-bold">Tombol tidak berjalan?</h3>
                  <p className="font-semibold">Nama user</p>
                  <p className="text-sm">10 Desember 2022</p>
                  <p className="truncate ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis beatae tempore odit ipsa quos nulla rem eos,
                    eveniet aspernatur magnam esse. Non, provident! Voluptate
                    molestias quas reprehenderit itaque? Tenetur sit voluptates
                    debitis, atque mollitia alias qui excepturi molestiae. Et,
                    molestias ducimus fugiat nulla assumenda molestiae neque
                    velit id iusto, consequuntur dolor, illo laboriosam placeat!
                    Voluptatum beatae suscipit repudiandae libero inventore odit
                    ducimus, commodi perspiciatis accusamus, recusandae a
                    voluptate provident corrupti error voluptates, reiciendis
                    assumenda neque atque. Doloremque officiis repellendus,
                    totam impedit nisi aliquam ut amet debitis id esse maxime
                    recusandae aliquid veniam libero maiores quo fuga eos illo
                    laborum! Nulla?
                  </p>
                  <div className="my-2">
                    <a href="" className="rounded bg-secondary py-3 px-4">
                      Lihat Diskusi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card item */}
            <div className="flex justify-between border-b-2 border-accent mt-2 text-slate-50">
              <div className="flex w-full">
                <div className="overflow-hidden">
                  <h3 className="font-bold">Tombol tidak berjalan?</h3>
                  <p className="font-semibold">Nama user</p>
                  <p className="text-sm">10 Desember 2022</p>
                  <p className="truncate ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis beatae tempore odit ipsa quos nulla rem eos,
                    eveniet aspernatur magnam esse. Non, provident! Voluptate
                    molestias quas reprehenderit itaque? Tenetur sit voluptates
                    debitis, atque mollitia alias qui excepturi molestiae. Et,
                    molestias ducimus fugiat nulla assumenda molestiae neque
                    velit id iusto, consequuntur dolor, illo laboriosam placeat!
                    Voluptatum beatae suscipit repudiandae libero inventore odit
                    ducimus, commodi perspiciatis accusamus, recusandae a
                    voluptate provident corrupti error voluptates, reiciendis
                    assumenda neque atque. Doloremque officiis repellendus,
                    totam impedit nisi aliquam ut amet debitis id esse maxime
                    recusandae aliquid veniam libero maiores quo fuga eos illo
                    laborum! Nulla?
                  </p>
                  <div className="my-2">
                    <a href="" className="rounded bg-secondary py-3 px-4">
                      Lihat Diskusi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Forum;
