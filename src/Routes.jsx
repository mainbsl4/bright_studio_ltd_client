import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/aboutus/About";
import NotFound from "./views/NotFound";
import Contact from "./views/contact/Contact";
import Services from "./views/services/Services";
import CutOuts from "./views/services/servicesPages/CutOuts";
import Price from "./views/Price/Price";
import SymmetricShapingWrinklesRemove from "./views/services/servicesPages/SymmetricShapingWrinklesRemove";
import HighEndModelRetouching from "./views/services/servicesPages/HighEndModelRetouching";
import ProductPhotoRetouching from "./views/services/servicesPages/ProductPhotoRetouching";
import JewelryRetouching from "./views/services/servicesPages/JewelryRetouching";
import ModelPhotoLiquifyRetouching from "./views/services/servicesPages/ModelPhotoLiquifyRetouching";
import ImageMasking from "./views/services/servicesPages/ImageMasking";
import NaturalShadow from "./views/services/servicesPages/NaturalShadow";
import ColorCorrection from "./views/services/servicesPages/ColorCorrection";
import ColorChanging from "./views/services/servicesPages/ColorChanging";
import ReflectionCreation from "./views/services/servicesPages/ReflectionCreation";
import NeckJointGhostMannequin from "./views/services/servicesPages/NeckJointGhostMannequin";
import ImageManipulation from "./views/services/servicesPages/ImageManipulation";
import MultipleClippingPath from "./views/services/servicesPages/MultipleClippingPath";
import PattanChinge from "./views/services/servicesPages/PattanChinge";
import ServRastertoVectorConversionices from "./views/services/servicesPages/ServRastertoVectorConversionices";
import RealEstatePhotoEditingRetouchingServices from "./views/services/servicesPages/RealEstatePhotoEditingRetouchingServices";
import D360PackshotRetouching from "./views/services/servicesPages/D360PackshotRetouching";
import PhotoRestoration from "./views/services/servicesPages/PhotoRestoration";
import Cloppingpath from "./views/services/servicesPages/Cloppingpath";

import FreeTrial from "./views/freeTrial/FreeTrial";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* =======================++++++++++++++++===================== */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/cutouts" element={<CutOuts />} />
      <Route path="/services/cloppingpath" element={<Cloppingpath />} />
      <Route path="/services/SymmetricShapingWrinklesRemove" element={<SymmetricShapingWrinklesRemove />} />
      <Route path="/services/HighEndModelRetouching" element={<HighEndModelRetouching />} />
      <Route path="/services/ProductPhotoRetouching" element={<ProductPhotoRetouching />} />
      <Route path="/services/JewelryRetouching" element={<JewelryRetouching />} />
      <Route path="/services/ModelPhotoLiquifyRetouching" element={<ModelPhotoLiquifyRetouching />} />
      <Route path="/services/ImageMasking" element={<ImageMasking />} />
      <Route path="/services/NaturalShadow" element={<NaturalShadow />} />
      <Route path="/services/ColorCorrection" element={<ColorCorrection />} />
      <Route path="/services/ColorChanging" element={<ColorChanging />} />
      <Route path="/services/ReflectionCreation" element={<ReflectionCreation />} />
      <Route path="/services/NeckJointGhostMannequin" element={<NeckJointGhostMannequin />} />
      <Route path="/services/ImageManipulation" element={<ImageManipulation />} />
      <Route path="/services/MultipleClippingPath" element={<MultipleClippingPath />} />
      <Route path="/services/PattanChinge" element={<PattanChinge />} />
      <Route path="/services/ServRastertoVectorConversionices" element={<ServRastertoVectorConversionices />} />
      <Route path="/services/RealEstatePhotoEditingRetouchingServices" element={<RealEstatePhotoEditingRetouchingServices />} />
      <Route path="/services/3D360PackshotRetouching" element={<D360PackshotRetouching />} />
      <Route path="/services/PhotoRestoration" element={<PhotoRestoration />} />


      <Route path="/FreeTrial" element={<FreeTrial />} />


      <Route path="/price" element={<Price />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
