import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

import 'swiper/css';

import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../src/container/Layout'
import theme from '../src/theme'
import Meta from '../src/utils/Meta'
import '../styles/globals.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import MainContext from '../src/context';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function MyApp({ Component, pageProps, router }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: window.innerWidth / 2,
        endY: window.innerHeight / 2,
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector(".cursor-dot"),
        $outline: document.querySelector(".cursor-dot-outline"),
    
        init: function () {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
    
            this.setupEventListeners();
            this.animateDotOutline();
        },
    
        //     updateCursor: function(e) {
        //         var self = this;
    
        //         console.log(e)
    
        //         // Show the cursor
        //         self.cursorVisible = true;
        //         self.toggleCursorVisibility();
    
        //         // Position the dot
        //         self.endX = e.pageX;
        //         self.endY = e.pageY;
        //         self.$dot.style.top = self.endY + 'px';
        //         self.$dot.style.left = self.endX + 'px';
        //     },
    
        setupEventListeners: function () {
            var self = this;
    
            // Anchor hovering
            document.querySelectorAll("a").forEach(function (el) {
                el.addEventListener("mouseover", function () {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener("mouseout", function () {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });
    
            // Click events
            document.addEventListener("mousedown", function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            document.addEventListener("mouseup", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
    
            document.addEventListener("mousemove", function (e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();
    
                // Position the dot
                self.endX = e.pageX;
                self.endY = e.pageY;
                self.$dot.style.top = self.endY + "px";
                self.$dot.style.left = self.endX + "px";
            });
    
            // Hide/show cursor
            document.addEventListener("mouseenter", function (e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            });
    
            document.addEventListener("mouseleave", function (e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            });
        },
    
        animateDotOutline: function () {
            var self = this;
    
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + "px";
            self.$outline.style.left = self._x + "px";
    
            requestAnimationFrame(this.animateDotOutline.bind(self));
        },
    
        toggleCursorSize: function () {
            var self = this;
    
            if (self.cursorEnlarged) {
                self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
                self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
            } else {
                self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
                self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
            }
        },
    
        toggleCursorVisibility: function () {
            var self = this;
    
            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        }
    };
    
    cursor.init();
    }, []);

    const handleCategories = (cat) => {
        setCategories(cat);
    }

    return (
        <MainContext.Provider value={{ categories, handleCategories }} >
            <ChakraProvider theme={theme}>
                <Meta title={"CÁPSULA | Sabemos que juntos llegaremos lejos"} />
                <Layout>
                    <motion.main
                    key={router.route}
                    variants={variants} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ type: 'linear' }} // Set the transition to linear
                    className=""
                    >
                        <Component {...pageProps}  />
                    </motion.main>
                </Layout>     
                <div className="cursor-dot-outline"></div>
                <div className="cursor-dot"></div>   
            </ChakraProvider>
        </MainContext.Provider>
    )
}

export default MyApp
