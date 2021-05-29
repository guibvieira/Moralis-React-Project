import {useMoralis} from "react-moralis";
import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import {
    Stack,
  CloseButton,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Text
} from "@chakra-ui/react"


export const Monsters = () => {
    const { Moralis } = useMoralis();

    useEffect(() => {
        const subscribeToMonster = async () => {
            console.log('running initial props');
            window.web3 = await Moralis?.Web3.enable();
            let query = new Moralis.Query('Monsters');
            let subscription = await query.subscribe();
            subscription.on('create',onMonsterCreated);
        }
        subscribeToMonster();
        checkFirstMonster();
    }, []);
    
    const onMonsterCreated = (monster) => {
        console.log('on monster created');
        console.log('monster', monster);
    }

    const checkFirstMonster = async () => {
        let current = await Moralis?.User.current();
        let firstMonster = await getFirstMonster();
        console.log('first monster', firstMonster);
    }

  
    const [name, setName] = useState("");
    const [health, setHealth] = useState(0);
    const [strength, setStrength] = useState(0);

    
    const defineNewMonsters = async (name, health, strength) => {
        const MonsterCreature = Moralis?.Object.extend("Monsters");
        const monster = new MonsterCreature();
        monster.set("health", health);
        monster.set("strength", strength);
        monster.set("name", name);

        await monster.save();
        return monster;
    }

    const getFirstMonster = async () => {
        const monsterCreature = Moralis?.Object.extend("Monsters");
        const query = new Moralis.Query(monsterCreature);
        let monster = await query.first();
        console.log('first monster', monster);
        return monster;
    }

    return <Stack spacing={6}>
        <Input placeholder="Monster Name" value={name} onChange={(event) => setName(event.currentTarget.value)}></Input>
        <Input placeholder="Monster Health" value={health} onChange={(event) => setHealth(event.currentTarget.value)}></Input>
        <Input  placeholder="Monster Strength" value={strength} onChange={(event) => setStrength(event.currentTarget.value)}></Input>
        <Button onClick={() => defineNewMonsters(name, health, strength)}>Create Monster</Button>
        </Stack>

        
}