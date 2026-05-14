import { useState } from "react";
import Navbar from "../../widgets/navbar/Navbar";
import Footer from "../../widgets/footer/Footer";
import Modal from "../../shared/ui/modal/Modal";
import LeadModalForm from "../../shared/ui/modal/LeadModalForm";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ProductShowcaseSection from "./sections/ProductShowcaseSection";
import CTASection from "./sections/CTASection";
import ContactSection from "./sections/ContactSection";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("trial");
  const [modalFormState, setModalFormState] = useState({
    canSubmit: false,
    submitting: false,
    status: "idle",
  });

  const handleOpenModal = (action = "trial") => {
    setModalAction(action);
    setModalFormState({ canSubmit: false, submitting: false, status: "idle" });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    // submit handled by form; keep for compatibility
    console.log(`Modal action: ${modalAction}`);
  };

  const modalContent = {
    trial: {
      title: "Coba Verdiqo Gratis",
      description: "Dapatkan akses penuh selama 14 hari. Tanpa perlu kartu kredit.",
      primaryActionText: "Mulai Coba",
    },
    demo: {
      title: "Jadwalkan Demo",
      description: "Biarkan tim kami menunjukkan cara Verdiqo mengubah farm Anda.",
      primaryActionText: "Jadwalkan",
    },
  };

  const current = modalContent[modalAction] || modalContent.trial;

  return (
    <>
      <Navbar
        onPrimaryClick={() => handleOpenModal("trial")}
        onSecondaryClick={() => handleOpenModal("trial")}
      />
      <main>
        <HeroSection
          onPrimaryClick={() => handleOpenModal("trial")}
          onSecondaryClick={() => handleOpenModal("demo")}
        />
        <FeaturesSection />
        <HowItWorksSection />
        <ProductShowcaseSection />
        <CTASection
          onPrimaryClick={() => handleOpenModal("trial")}
          onSecondaryClick={() => handleOpenModal("demo")}
        />
        <ContactSection />
      </main>
      <Footer />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={current.title}
        primaryActionText={current.primaryActionText}
        primaryAction={handleModalSubmit}
        primaryDisabled={!modalFormState.canSubmit}
        primaryLoading={modalFormState.submitting}
        primaryButtonType="submit"
        primaryForm={`lead-form-${modalAction}`}
        secondaryActionText="Batal"
      >
        <div className="space-y-4">
          <p className="text-sm text-graphite">{current.description}</p>

          <LeadModalForm
            mode={modalAction}
            formId={`lead-form-${modalAction}`}
            onDone={handleCloseModal}
            onStateChange={setModalFormState}
          />
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
