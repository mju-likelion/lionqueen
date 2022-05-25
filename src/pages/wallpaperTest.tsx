import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';

const WallpaperTest = () => {
  return (
    <BackgroundMain>
      <div className="pt-[50px]">
        <p className="text-[50px] text-center">안녕하세요</p>
        <div className="flex justify-center">
          <Button color="primary-orange">버튼1</Button>
          <Button color="primary-orange">버튼2</Button>
          <Button color="primary-orange">버튼3</Button>
        </div>
      </div>
    </BackgroundMain>
  );
};

export default WallpaperTest;
