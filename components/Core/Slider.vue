<template>
  <div>
    <carousel
      class="container"
      :autoplay="true"
      :autoplayHoverPause="true"
      :perPageCustom="[
        [320, 1],
        [768, 2],
        [1024, 4],
      ]"
      paginationActiveColor="red"
      paginationColor="blue"
      :paginationSize="10"
      :paginationPadding="10"
    >
      <slide
        ><div class="w-2/4 p-10 bg-grey-lighter">
          Do velit labore reprehenderit occaecat aliquip.
        </div>
      </slide>
      <slide
        ><div class="w-2/4 p-10 bg-grey-lighter">
          Adipisicing id reprehenderit deserunt elit anim dolore incididunt
          exercitation aute magna exercitation fugiat officia.
        </div>
      </slide>
      <slide
        ><div class="w-2/4 p-10 bg-grey-lighter">
          Consequat minim cupidatat exercitation quis proident ex.
        </div>
      </slide>
      <slide
        ><div class="w-2/4 p-10 bg-grey-lighter">
          Officia tempor enim excepteur consectetur aliqua velit reprehenderit
          aliqua veniam.
        </div>
      </slide>
      <slide
        ><div class="w-2/4 p-10 bg-grey-lighter">
          Tempor incididunt tempor sit minim eu ad ullamco exercitation aute
          laborum.
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>
