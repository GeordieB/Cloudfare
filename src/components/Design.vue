<template>
  <div class="design-div px-8 pt-8">
    <!--    Center between paragraphs like "Take up space"-->
    <!--    <h1 class="pt-8 ml-16 font-weight-regular">-->
    <!--      {{ $t('design.title') }}-->
    <!--    </h1>-->
    <p class="description mx-16">
      {{ $t('design.description') }}
    </p>
    <br />
    <div class="mx-16 ml-16 pl-16 pb-8">
      <ul>
        <li>
          <p class="description mr-16">
            {{ $t('design.firstBulletPoint') }}
          </p>
        </li>
        <li>
          <p class="description mr-16">
            {{ $t('design.secondBulletPointBeforeLink') }}
            <a href="https://naafa.org/sizefreedom">{{
              $t('design.secondBulletPointLinkText')
            }}</a>
            {{ $t('design.secondBulletPointAfterLink') }}
          </p>
          <div class="mx-16 ml-16">
            <br />
            <ul>
              <li>
                <span class="description mr-16">
                  <span class="description-yellow">
                    {{ $t('design.yellowTitle') }}
                  </span>
                  {{ $t('design.yellowDescription') }}
                </span>
              </li>
              <li>
                <span class="description mr-16">
                  <span class="description-white">
                    {{ $t('design.whiteTitle') }}
                  </span>
                  {{ $t('design.whiteDescription') }}
                </span>
              </li>
              <li>
                <span class="description mr-16">
                  <span class="description-coral px-1">
                    {{ $t('design.coralTitle') }}
                  </span>
                  {{ $t('design.coralDescription') }}
                </span>
              </li>
              <li>
                <span class="description mr-16">
                  <span class="description-blue">
                    {{ $t('design.blueTitle') }}
                  </span>
                  {{ $t('design.blueDescription') }}
                </span>
              </li>
              <li>
                <span class="description mr-16">
                  <span class="description-brown">
                    {{ $t('design.brownTitle') }}
                  </span>
                  {{ $t('design.brownDescriptionBeforeLink') }}
                  <a href="https://www.npr.org/transcripts/893006538">{{
                    $t('design.brownDescriptionLinkText')
                  }}</a>
                  {{ $t('design.brownDescriptionAfterLink') }}
                </span>
              </li>
            </ul>
            <br />
          </div>
        </li>
        <li>
          <p class="description mr-16">
            {{ $t('design.thirdBulletPointBeforeBold') }}
            <span class="font-weight-bold">{{
              $t('design.thirdBulletPointBold')
            }}</span>
            {{ $t('design.thirdBulletPointAfterBold') }}
          </p>
        </li>
        <li>
          <p class="description mr-16">
            {{ $t('design.fourthBulletPoint') }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 40px;
  transform: skewX(-10deg);
}

.design-div {
  color: #201c37;
  background-color: #ef734f;
}

.description {
  font-size: 16px;
  font-weight: 300;
}

.description-yellow {
  font-weight: 500;
  color: #ffca2e;
}

.description-white {
  font-weight: 500;
  color: #ffffff;
}

.description-coral {
  font-weight: 500;
  color: #ef734f;
  background-color: #fcbaa7;
}

.description-blue {
  font-weight: 500;
  color: #0550cf;
}

.description-brown {
  font-weight: 500;
  color: #4f372d;
}

a {
  color: #0550cf;
}
</style>
