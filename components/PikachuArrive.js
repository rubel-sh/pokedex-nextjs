const PikachuArrive = () => {
  return (
    <>
      {/* News for Large screen */}
      <div className="hidden  lg:grid grid-cols-7 gap-4 text-sm font-bold text-slate-800 break-all pb-20">
        {/* Left Content */}
        <div className="col-span-4  flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-4">
            {/* Text */}
            <div className="col-span-3 flex flex-col ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.C. This
                book is a treatise on the theory of e
              </p>
              {/* Left Middle Content */}
              <div className="flex py-4 gap-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five.The first line of
                  Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                  linetext ever since the 1500s, when an unknow
                </p>
                <img src="/Image04.png" width="200" height="200" alt="" />
              </div>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words,
              </p>
            </div>
            {/* Images */}
            <div className="flex flex-col gap-4 ">
              <img src="/Image03.png" width="200" height="200" alt="" />
              <img src="/Image02.png" width="200" height="200" alt="" />
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
        {/* Right Content */}
        <div className="col-span-3 flex flex-col gap-4">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If y
          </p>
          {/* Image with text */}
          <div className="flex flex-col gap-2">
            <div className="flex  gap-4">
              <img src="/Image05.png" width="200" height="200" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five.The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a linetext ever since the
                1500s, when an unknow
              </p>
            </div>
            <div className="flex gap-4">
              <img src="/Image01.png" width="200" height="200" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five.The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a linetext ever since the
                1500s, when an unknow
              </p>
            </div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
          </p>
        </div>
      </div>

      {/* News for mobile screen */}
      <div className="block lg:hidden px-4 font-bold text-slate-700">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        {/* Images */}
        <div className="grid grid-cols-3 gap-3">
          <img src="/Image04.png" className="mt-10" alt="" />
          <div className="flex flex-col gap-3">
            <img src="/Image03.png" alt="" />
            <img src="Image02.png" alt="" />
          </div>
          <div className="mt-10 grid gap-3">
            <img src="/Image05.png" alt="" />
            <img src="/Image01.png" alt="" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </>
  );
};

export default PikachuArrive;
