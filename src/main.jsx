import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Dashmain from './Components/Dashboard/Dashmain.jsx';
import DashboardLayout from './DashLayout.jsx';
import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';
import ChemPracticals from './Components/Dashboard/ChemPracticals/ChemPracticals.jsx';
import PhyPracticals from './Components/Dashboard/PhyPracticals/PhyPracticals.jsx';
import EmfExp12 from './Components/Dashboard/PhyPracticals/Phy12thexplained/EmfExp12.jsx';
import PotentiometerExp12 from "./Components/Dashboard/PhyPracticals/Phy12thexplained/PotentiometerExp12.jsx"
import OhmExp11 from './Components/Dashboard/PhyPracticals/Phy11thexplained/OhmExp11.jsx';
import Procedure from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Procedure.jsx"
import Animation from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Animation.jsx"
import Theory from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Theory.jsx"
import OE12O from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/OhmExp12Outlet.jsx';
import Simulator from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Simulator.jsx';
import Video from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Video.jsx';
import VivaVoice from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/VivaVoice.jsx';
import Resources from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Resources.jsx';
import Feedback from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Feedback.jsx';
// 101
import FLC10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/FocalLengthConvex10Outlet.jsx';
import TheoryPhy101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/TheoryPhy101.jsx"
import Animation101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Animation101.jsx"
import Procedure101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Procedure101.jsx"
import Simulator101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Simulator101.jsx"
import VivaVoice101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/VivaVoice101.jsx"
import Resources101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Resources101.jsx"
import Feedback101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Feedback101.jsx"
import Video101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Video101.jsx"

// 102
import MF10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/MagnetField10Outlet.jsx'
import Theory102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/TheoryPhy102.jsx'
import Animation102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Animation102.jsx'
import Procedure102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Procedure102.jsx'
import Simulator102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Simulator102.jsx'
import VivaVoice102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/VivaVoice102.jsx'
import Resources102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Resources102.jsx'
import Feedback102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Feedback102.jsx'
import Video102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Video102.jsx'

// 103
import PC10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/ParallexCircuit10Outlet.jsx'
import Theory103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/TheoryPhy103.jsx'
import Animation103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Animation103.jsx'
import Procedure103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Procedure103.jsx'
import Simulator103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Simulator103.jsx'
import VivaVoice103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/VivaVoice103.jsx'
import Resources103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Resources103.jsx'
import Feedback103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Feedback103.jsx'
import Video103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Video103.jsx'

// 104
import RBGS10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/RefractionByGlassSlab10Outlet.jsx'
import Theory104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/TheoryPhy104.jsx'
import Animation104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Animation104.jsx'
import Procedure104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Procedure104.jsx'
import Simulator104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Simulator104.jsx'
import VivaVoice104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/VivaVoice104.jsx'
import Resources104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Resources104.jsx'
import Feedback104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Feedback104.jsx'
import Video104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Video104.jsx'

// 105
import SC10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/SeriesCircuit10Outlet.jsx';
import Theory105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/TheoryPhy105.jsx';
import Animation105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Animation105.jsx';
import Procedure105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Procedure105.jsx';
import Simulator105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Simulator105.jsx';
import VivaVoice105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/VivaVoice105.jsx';
import Resources105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Resources105.jsx';
import Feedback105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Feedback105.jsx';
import Video105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Video105.jsx';

// 106
import VOL10Outlet from "./Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/VerifyOhmLaw10Outlet.jsx"
import Theory106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/TheoryPhy106.jsx';
import Animation106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Animation106.jsx';
import Procedure106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Procedure106.jsx';
import Simulator106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Simulator106.jsx';
import VivaVoice106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/VivaVoice106.jsx';
import Resources106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Resources106.jsx';
import Feedback106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Feedback106.jsx';
import Video106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Video106.jsx';

// 9th
// 91
import VC9Outlet from "./Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/VernierCaliper9Outlet.jsx"
import Theory91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/TheoryPhy91.jsx'
import Animation91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Animation91.jsx';
import Procedure91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Procedure91.jsx';
import Simulator91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Simulator91.jsx';
import VivaVoice91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/VivaVoice91.jsx';
import Resources91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Resources91.jsx';
import Feedback91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Feedback91.jsx';
import Video91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Video91.jsx';

// 95
import PO9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/PendulumOne9Outlet.jsx'
import Theory95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/TheoryPhy95.jsx'
import Animation95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Animation95.jsx';
import Procedure95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Procedure95.jsx';
import Simulator95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Simulator95.jsx';
import VivaVoice95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/VivaVoice95.jsx';
import Resources95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Resources95.jsx';
import Feedback95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Feedback95.jsx';
import Video95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Video95.jsx';

// 92
import PT9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/PendulumTwo9Outlet.jsx'
import Theory92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/TheoryPhy92.jsx'
import Animation92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Animation92.jsx';
import Procedure92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Procedure92.jsx';
import Simulator92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Simulator92.jsx';
import VivaVoice92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/VivaVoice92.jsx';
import Resources92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Resources92.jsx';
import Feedback92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Feedback92.jsx';
import Video92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Video92.jsx';

// 93
import GS9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/GlassSlab9Outlet.jsx'
import Theory93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/TheoryPhy93.jsx'
import Animation93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Animation93.jsx';
import Procedure93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Procedure93.jsx';
import Simulator93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Simulator93.jsx';
import VivaVoice93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/VivaVoice93.jsx';
import Resources93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Resources93.jsx';
import Feedback93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Feedback93.jsx';
import Video93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Video93.jsx';

// 94
import MR9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/MeterRod9Outlet.jsx'
import Theory94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/TheoryPhy94.jsx'
import Animation94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Animation94.jsx';
import Procedure94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Procedure94.jsx';
import Simulator94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Simulator94.jsx';
import VivaVoice94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/VivaVoice94.jsx';
import Resources94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Resources94.jsx';
import Feedback94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Feedback94.jsx';
import Video94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Video94.jsx';

// Bio 9 1
import CWA9Outlet from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/CellWallAlovera9Outlet.jsx'
import BioTheory91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioTheory91.jsx'
import BioAnimation91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioAnimation91.jsx';
import BioProcedure91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioProcedure91.jsx';
import BioSimulator91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioSimulator91.jsx';
import BioVivaVoice91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioVivaVoice91.jsx';
import BioResources91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioResources91.jsx';
import BioFeedback91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioFeedback91.jsx';
import BioVideo91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioVideo91.jsx';

// 9 2
import MSE9Outlet from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/MicroScopicEx9Outlet.jsx'
import BioTheory92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioTheory92.jsx'
import BioAnimation92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioAnimation92.jsx';
import BioProcedure92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioProcedure92.jsx';
import BioSimulator92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioSimulator92.jsx';
import BioVivaVoice92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioVivaVoice92.jsx';
import BioResources92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioResources92.jsx';
import BioFeedback92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioFeedback92.jsx';
import BioVideo92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioVideo92.jsx';

// 9 3
import P9Outlet from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/Plasmolysis9Outlet.jsx'
import BioTheory93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioTheory93.jsx'
import BioAnimation93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioAnimation93.jsx';
import BioProcedure93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioProcedure93.jsx';
import BioSimulator93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioSimulator93.jsx';
import BioVivaVoice93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioVivaVoice93.jsx';
import BioResources93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioResources93.jsx';
import BioFeedback93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioFeedback93.jsx';
import BioVideo93 from './Components/Dashboard/BioPracticals/Bio9thexplained/Plasmolysis9/NavPages/BioVideo93.jsx';

// 9 4
import A9Outlet from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/Amoeba9Outlet.jsx'
import BioTheory94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioTheory94.jsx'
import BioAnimation94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioAnimation94.jsx';
import BioProcedure94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioProcedure94.jsx';
import BioSimulator94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioSimulator94.jsx';
import BioVivaVoice94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioVivaVoice94.jsx';
import BioResources94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioResources94.jsx';
import BioFeedback94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioFeedback94.jsx';
import BioVideo94 from './Components/Dashboard/BioPracticals/Bio9thexplained/Amoeba9/NavPages/BioVideo94.jsx';

// 9 5
import SOB9Outlet from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/StudyOfBacteria9Outlet.jsx'
import BioTheory95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioTheory95.jsx'
import BioAnimation95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioAnimation95.jsx';
import BioProcedure95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioProcedure95.jsx';
import BioSimulator95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioSimulator95.jsx';
import BioVivaVoice95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioVivaVoice95.jsx';
import BioResources95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioResources95.jsx';
import BioFeedback95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioFeedback95.jsx';
import BioVideo95 from './Components/Dashboard/BioPracticals/Bio9thexplained/StudyOfBacteria9/NavPages/BioVideo95.jsx';

// 101
import BR10Outlet from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/BreathingRate10Outlet.jsx'
import BioTheory101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioTheory101.jsx'
import BioAnimation101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioAnimation101.jsx';
import BioProcedure101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioProcedure101.jsx';
import BioSimulator101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioSimulator101.jsx';
import BioVivaVoice101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioVivaVoice101.jsx';
import BioResources101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioResources101.jsx';
import BioFeedback101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioFeedback101.jsx';
import BioVideo101 from './Components/Dashboard/BioPracticals/Bio10thexplained/BreathingRate10/NavPages/BioVideo101.jsx';

// 102
import TIC10Outlet from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/TarInCigrette10Outlet.jsx'
import BioTheory102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioTheory102.jsx'
import BioAnimation102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioAnimation102.jsx';
import BioProcedure102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioProcedure102.jsx';
import BioSimulator102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioSimulator102.jsx';
import BioVivaVoice102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioVivaVoice102.jsx';
import BioResources102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioResources102.jsx';
import BioFeedback102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioFeedback102.jsx';
import BioVideo102 from './Components/Dashboard/BioPracticals/Bio10thexplained/TarInCigrette10/NavPages/BioVideo102.jsx';

// 103
import K10Outlet from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/Kidney10Outlet.jsx'
import BioTheory103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioTheory103.jsx'
import BioAnimation103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioAnimation103.jsx';
import BioProcedure103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioProcedure103.jsx';
import BioSimulator103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioSimulator103.jsx';
import BioVivaVoice103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioVivaVoice103.jsx';
import BioResources103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioResources103.jsx';
import BioFeedback103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioFeedback103.jsx';
import BioVideo103 from './Components/Dashboard/BioPracticals/Bio10thexplained/Kidney10/NavPages/BioVideo103.jsx';

// 104
import E10Outlet from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/Eye10Outlet.jsx'
import BioTheory104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioTheory104.jsx'
import BioAnimation104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioAnimation104.jsx';
import BioProcedure104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioProcedure104.jsx';
import BioSimulator104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioSimulator104.jsx';
import BioVivaVoice104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioVivaVoice104.jsx';
import BioResources104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioResources104.jsx';
import BioFeedback104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioFeedback104.jsx';
import BioVideo104 from './Components/Dashboard/BioPracticals/Bio10thexplained/Eye10/NavPages/BioVideo104.jsx';


// 105
import FIA10Outlet from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/FissionInAmoeba10Outlet.jsx';
import BioTheory105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioTheory105.jsx'
import BioAnimation105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioAnimation105.jsx';
import BioProcedure105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioProcedure105.jsx';
import BioSimulator105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioSimulator105.jsx';
import BioVivaVoice105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioVivaVoice105.jsx';
import BioResources105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioResources105.jsx';
import BioFeedback105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioFeedback105.jsx';
import BioVideo105 from './Components/Dashboard/BioPracticals/Bio10thexplained/FissionInAmoeba10/NavPages/BioVideo105.jsx';

// chem 10 1
import FT10Outlet from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/FlameTest10Outlet.jsx'
import ChemTheory101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemTheory101.jsx'
import ChemAnimation101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemAnimation101.jsx'
import ChemProcedure101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemProcedure101.jsx'
import ChemSimulator101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemSimulator101.jsx'
import ChemVivaVoice101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemVivaVoice101.jsx'
import ChemResources101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemResources101.jsx'
import ChemFeedback101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemFeedback101.jsx'
import ChemVideo101 from './Components/Dashboard/ChemPracticals/Chem10thexplained/FlameTest10/NavPages/ChemVideo101.jsx'

// chem 10 2
import M10Outlet from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/Molarity10Outlet.jsx'
import ChemTheory102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemTheory102.jsx'
import ChemAnimation102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemAnimation102.jsx'
import ChemProcedure102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemProcedure102.jsx'
import ChemSimulator102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemSimulator102.jsx'
import ChemVivaVoice102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemVivaVoice102.jsx'
import ChemResources102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemResources102.jsx'
import ChemFeedback102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemFeedback102.jsx'
import ChemVideo102 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Molarity10/NavPages/ChemVideo102.jsx'

// chem 10 3
import A10Outlet from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/Aldehydes10Outlet.jsx'
import ChemTheory103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemTheory103.jsx'
import ChemAnimation103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemAnimation103.jsx'
import ChemProcedure103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemProcedure103.jsx'
import ChemSimulator103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemSimulator103.jsx'
import ChemVivaVoice103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemVivaVoice103.jsx'
import ChemResources103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemResources103.jsx'
import ChemFeedback103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemFeedback103.jsx'
import ChemVideo103 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Aldehydes10/NavPages/ChemVideo103.jsx'

// chem 10 4
import Ket10Outlet from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/Ketones10Outlet.jsx'
import ChemTheory104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemTheory104.jsx'
import ChemAnimation104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemAnimation104.jsx'
import ChemProcedure104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemProcedure104.jsx'
import ChemSimulator104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemSimulator104.jsx'
import ChemVivaVoice104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemVivaVoice104.jsx'
import ChemResources104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemResources104.jsx'
import ChemFeedback104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemFeedback104.jsx'
import ChemVideo104 from './Components/Dashboard/ChemPracticals/Chem10thexplained/Ketones10/NavPages/ChemVideo104.jsx'

// // chem 10 5
import NaOH10Outlet from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NaOH10Outlet.jsx'
import ChemTheory105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemTheory105.jsx'
import ChemAnimation105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemAnimation105.jsx'
import ChemProcedure105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemProcedure105.jsx'
import ChemSimulator105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemSimulator105.jsx'
import ChemVivaVoice105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemVivaVoice105.jsx'
import ChemResources105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemResources105.jsx'
import ChemFeedback105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemFeedback105.jsx'
import ChemVideo105 from './Components/Dashboard/ChemPracticals/Chem10thexplained/NaOH10/NavPages/ChemVideo105.jsx'

// // chem 10 6
import KMnO410Outlet from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/KMnO410Outlet.jsx'
import ChemTheory106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemTheory106.jsx'
import ChemAnimation106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemAnimation106.jsx'
import ChemProcedure106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemProcedure106.jsx'
import ChemSimulator106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemSimulator106.jsx'
import ChemVivaVoice106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemVivaVoice106.jsx'
import ChemResources106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemResources106.jsx'
import ChemFeedback106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemFeedback106.jsx'
import ChemVideo106 from './Components/Dashboard/ChemPracticals/Chem10thexplained/KMnO410/NavPages/ChemVideo106.jsx'

// 9 1
import Dist9Outlet from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/Distilation9Outlet.jsx'
import ChemTheory91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemTheory91.jsx'
import ChemAnimation91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemAnimation91.jsx'
import ChemProcedure91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemProcedure91.jsx'
import ChemSimulator91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemSimulator91.jsx'
import ChemVivaVoice91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemVivaVoice91.jsx'
import ChemResources91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemResources91.jsx'
import ChemFeedback91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemFeedback91.jsx'
import ChemVideo91 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Distilation9/NavPages/ChemVideo91.jsx'

// 9 2
import EA9Outlet from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/EthyleAlcohol9Outlet.jsx'
import ChemTheory92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemTheory92.jsx'
import ChemAnimation92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemAnimation92.jsx'
import ChemProcedure92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemProcedure92.jsx'
import ChemSimulator92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemSimulator92.jsx'
import ChemVivaVoice92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemVivaVoice92.jsx'
import ChemResources92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemResources92.jsx'
import ChemFeedback92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemFeedback92.jsx'
import ChemVideo92 from './Components/Dashboard/ChemPracticals/Chem9thexplained/EthyleAlcohol9/NavPages/ChemVideo92.jsx'

// 9 3
import Nap9Outlet from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/Naphthalene9Outlet.jsx'
import ChemTheory93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemTheory93.jsx'
import ChemAnimation93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemAnimation93.jsx'
import ChemProcedure93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemProcedure93.jsx'
import ChemSimulator93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemSimulator93.jsx'
import ChemVivaVoice93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemVivaVoice93.jsx'
import ChemResources93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemResources93.jsx'
import ChemFeedback93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemFeedback93.jsx'
import ChemVideo93 from './Components/Dashboard/ChemPracticals/Chem9thexplained/Naphthalene9/NavPages/ChemVideo93.jsx'

// 9 4
import CS9Outlet from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/CopperSulphate9Outlet.jsx'
import ChemTheory94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemTheory94.jsx'
import ChemAnimation94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemAnimation94.jsx'
import ChemProcedure94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemProcedure94.jsx'
import ChemSimulator94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemSimulator94.jsx'
import ChemVivaVoice94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemVivaVoice94.jsx'
import ChemResources94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemResources94.jsx'
import ChemFeedback94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemFeedback94.jsx'
import ChemVideo94 from './Components/Dashboard/ChemPracticals/Chem9thexplained/CopperSulphate9/NavPages/ChemVideo94.jsx'

// 9 5
import AC9Outlet from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/AmmoniumChloride9Outlet.jsx'
import ChemTheory95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemTheory95.jsx'
import ChemAnimation95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemAnimation95.jsx'
import ChemProcedure95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemProcedure95.jsx'
import ChemSimulator95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemSimulator95.jsx'
import ChemVivaVoice95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemVivaVoice95.jsx'
import ChemResources95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemResources95.jsx'
import ChemFeedback95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemFeedback95.jsx'
import ChemVideo95 from './Components/Dashboard/ChemPracticals/Chem9thexplained/AmmoniumChloride9/NavPages/ChemVideo95.jsx'

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={() => {
          <>Testing</>
        }}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </Router >
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
